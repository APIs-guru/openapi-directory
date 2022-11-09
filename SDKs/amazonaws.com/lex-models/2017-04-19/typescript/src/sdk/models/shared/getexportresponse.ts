import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportStatusEnum } from "./exportstatusenum";
import { ExportTypeEnum } from "./exporttypeenum";
import { ResourceTypeEnum } from "./resourcetypeenum";


export class GetExportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=exportStatus" })
  exportStatus?: ExportStatusEnum;

  @Metadata({ data: "json, name=exportType" })
  exportType?: ExportTypeEnum;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
