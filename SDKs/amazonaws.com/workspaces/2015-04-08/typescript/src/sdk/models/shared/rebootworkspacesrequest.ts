import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RebootRequest } from "./rebootrequest";



export class RebootWorkspacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RebootWorkspaceRequests", elemType: RebootRequest })
  rebootWorkspaceRequests: RebootRequest[];
}
