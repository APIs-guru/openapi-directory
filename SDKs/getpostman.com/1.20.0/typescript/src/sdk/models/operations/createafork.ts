import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAForkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_uid" })
  collectionUid: string;
}


export class CreateAForkQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace?: string;
}


export class CreateAForkRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class CreateAForkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateAForkPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateAForkQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateAForkRequestBody;
}


export class CreateAForkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
