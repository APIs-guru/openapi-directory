import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrgsConvertMemberToOutsideCollaboratorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class OrgsConvertMemberToOutsideCollaborator403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
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
  orgsConvertMemberToOutsideCollaborator403ApplicationJsonObject?: OrgsConvertMemberToOutsideCollaborator403ApplicationJson;
}
