import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrgsRemoveOutsideCollaboratorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class OrgsRemoveOutsideCollaboratorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsRemoveOutsideCollaboratorPathParams;
}


export class OrgsRemoveOutsideCollaborator422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class OrgsRemoveOutsideCollaboratorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  orgsRemoveOutsideCollaborator422ApplicationJsonObject?: OrgsRemoveOutsideCollaborator422ApplicationJson;
}
