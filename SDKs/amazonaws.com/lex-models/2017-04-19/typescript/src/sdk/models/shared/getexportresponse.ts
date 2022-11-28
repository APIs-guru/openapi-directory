import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportStatusEnum } from "./exportstatusenum";
import { ExportTypeEnum } from "./exporttypeenum";
import { ResourceTypeEnum } from "./resourcetypeenum";



export class GetExportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exportStatus" })
  exportStatus?: ExportStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=exportType" })
  exportType?: ExportTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
