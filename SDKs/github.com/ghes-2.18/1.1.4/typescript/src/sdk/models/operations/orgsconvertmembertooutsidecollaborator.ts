import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrgsConvertMemberToOutsideCollaboratorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class OrgsConvertMemberToOutsideCollaboratorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsConvertMemberToOutsideCollaboratorPathParams;
}


export class OrgsConvertMemberToOutsideCollaboratorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  orgsConvertMemberToOutsideCollaborator202ApplicationJsonObject?: Map<string, any>;
}
