import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportStatusEnum } from "./importstatusenum";
import { MergeStrategyEnum } from "./mergestrategyenum";
import { ImportResourceSpecification } from "./importresourcespecification";



export class DescribeImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=failureReasons" })
  failureReasons?: string[];

  @SpeakeasyMetadata({ data: "json, name=importId" })
  importId?: string;

  @SpeakeasyMetadata({ data: "json, name=importStatus" })
  importStatus?: ImportStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=importedResourceId" })
  importedResourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=importedResourceName" })
  importedResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=mergeStrategy" })
  mergeStrategy?: MergeStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=resourceSpecification" })
  resourceSpecification?: ImportResourceSpecification;
}
