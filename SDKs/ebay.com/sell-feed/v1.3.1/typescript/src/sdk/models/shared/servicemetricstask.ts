import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerServiceMetricsFilterCriteria } from "./customerservicemetricsfiltercriteria";



export class ServiceMetricsTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completionDate" })
  completionDate?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=detailHref" })
  detailHref?: string;

  @SpeakeasyMetadata({ data: "json, name=feedType" })
  feedType?: string;

  @SpeakeasyMetadata({ data: "json, name=filterCriteria" })
  filterCriteria?: CustomerServiceMetricsFilterCriteria;

  @SpeakeasyMetadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;
}
