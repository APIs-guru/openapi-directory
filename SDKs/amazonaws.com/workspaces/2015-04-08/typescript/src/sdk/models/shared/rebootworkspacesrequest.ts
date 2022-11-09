import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RebootRequest } from "./rebootrequest";


export class RebootWorkspacesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=RebootWorkspaceRequests", elemType: shared.RebootRequest })
  rebootWorkspaceRequests: RebootRequest[];
}
