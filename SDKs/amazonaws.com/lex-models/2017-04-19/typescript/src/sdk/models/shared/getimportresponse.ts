import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportStatusEnum } from "./importstatusenum";
import { MergeStrategyEnum } from "./mergestrategyenum";
import { ResourceTypeEnum } from "./resourcetypeenum";



export class GetImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string[];

  @SpeakeasyMetadata({ data: "json, name=importId" })
  importId?: string;

  @SpeakeasyMetadata({ data: "json, name=importStatus" })
  importStatus?: ImportStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=mergeStrategy" })
  mergeStrategy?: MergeStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;
}
