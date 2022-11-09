import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostBundlesIdSharePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostBundlesIdShareRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=note" })
  note?: string;

  @Metadata({ data: "multipart_form, name=recipients;json=true" })
  recipients?: Map<string, any>[];

  @Metadata({ data: "multipart_form, name=to" })
  to?: string[];
}


export class PostBundlesIdShareRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostBundlesIdSharePathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostBundlesIdShareRequestBody;
}


export class PostBundlesIdShareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
