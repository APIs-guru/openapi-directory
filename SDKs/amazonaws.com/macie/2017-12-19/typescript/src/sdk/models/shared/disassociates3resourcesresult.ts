import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FailedS3Resource } from "./faileds3resource";


export class DisassociateS3ResourcesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=failedS3Resources", elemType: shared.FailedS3Resource })
  failedS3Resources?: FailedS3Resource[];
}
