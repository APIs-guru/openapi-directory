import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerServiceMetricsFilterCriteria } from "./customerservicemetricsfiltercriteria";


export class ServiceMetricsTask extends SpeakeasyBase {
  @Metadata({ data: "json, name=completionDate" })
  completionDate?: string;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=detailHref" })
  detailHref?: string;

  @Metadata({ data: "json, name=feedType" })
  feedType?: string;

  @Metadata({ data: "json, name=filterCriteria" })
  filterCriteria?: CustomerServiceMetricsFilterCriteria;

  @Metadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=taskId" })
  taskId?: string;
}
