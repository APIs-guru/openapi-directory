import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportStatusEnum } from "./importstatusenum";
import { MergeStrategyEnum } from "./mergestrategyenum";
import { ImportResourceSpecification } from "./importresourcespecification";



export class StartImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=importId" })
  importId?: string;

  @SpeakeasyMetadata({ data: "json, name=importStatus" })
  importStatus?: ImportStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=mergeStrategy" })
  mergeStrategy?: MergeStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=resourceSpecification" })
  resourceSpecification?: ImportResourceSpecification;
}
