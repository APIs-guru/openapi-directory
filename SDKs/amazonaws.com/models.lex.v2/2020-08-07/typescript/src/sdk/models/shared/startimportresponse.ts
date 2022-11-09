import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportStatusEnum } from "./importstatusenum";
import { MergeStrategyEnum } from "./mergestrategyenum";
import { ImportResourceSpecification } from "./importresourcespecification";


export class StartImportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=importId" })
  importId?: string;

  @Metadata({ data: "json, name=importStatus" })
  importStatus?: ImportStatusEnum;

  @Metadata({ data: "json, name=mergeStrategy" })
  mergeStrategy?: MergeStrategyEnum;

  @Metadata({ data: "json, name=resourceSpecification" })
  resourceSpecification?: ImportResourceSpecification;
}
