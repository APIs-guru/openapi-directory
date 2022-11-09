import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateAForkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collection_uid" })
  collectionUid: string;
}


export class CreateAForkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace?: string;
}


export class CreateAForkRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class CreateAForkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateAForkPathParams;

  @Metadata()
  queryParams: CreateAForkQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateAForkRequestBody;
}


export class CreateAForkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
