import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrgsRemoveOutsideCollaboratorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class OrgsRemoveOutsideCollaborator422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class OrgsRemoveOutsideCollaboratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrgsRemoveOutsideCollaboratorPathParams;
}


export class OrgsRemoveOutsideCollaboratorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  orgsRemoveOutsideCollaborator422ApplicationJsonObject?: OrgsRemoveOutsideCollaborator422ApplicationJson;
}
