import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrgsConvertMemberToOutsideCollaboratorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class OrgsConvertMemberToOutsideCollaboratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrgsConvertMemberToOutsideCollaboratorPathParams;
}


export class OrgsConvertMemberToOutsideCollaboratorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  orgsConvertMemberToOutsideCollaborator202ApplicationJsonObject?: Map<string, any>;
}
