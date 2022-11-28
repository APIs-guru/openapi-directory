import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostBundlesIdSharePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostBundlesIdShareRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=recipients;json=true" })
  recipients?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "multipart_form, name=to" })
  to?: string[];
}


export class PostBundlesIdShareRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostBundlesIdSharePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostBundlesIdShareRequestBody;
}


export class PostBundlesIdShareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
