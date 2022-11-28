import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TagsPutRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  apiCoreDtoTagsTag?: shared.ApiCoreDtoTagsTag;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreDtoTagsTag1?: shared.ApiCoreDtoTagsTag;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  apiCoreDtoTagsTag2?: shared.ApiCoreDtoTagsTag;
}


export class TagsPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: TagsPutRequests;
}


export class TagsPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
