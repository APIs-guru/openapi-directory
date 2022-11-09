import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportStatusEnum } from "./importstatusenum";
import { MergeStrategyEnum } from "./mergestrategyenum";
import { ResourceTypeEnum } from "./resourcetypeenum";


export class GetImportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string[];

  @Metadata({ data: "json, name=importId" })
  importId?: string;

  @Metadata({ data: "json, name=importStatus" })
  importStatus?: ImportStatusEnum;

  @Metadata({ data: "json, name=mergeStrategy" })
  mergeStrategy?: MergeStrategyEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;
}
