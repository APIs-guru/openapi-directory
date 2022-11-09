import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TagsPutRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  apiCoreDtoTagsTag?: shared.ApiCoreDtoTagsTag;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreDtoTagsTag1?: shared.ApiCoreDtoTagsTag;

  @Metadata({ data: "request, media_type=text/json" })
  apiCoreDtoTagsTag2?: shared.ApiCoreDtoTagsTag;
}


export class TagsPutRequest extends SpeakeasyBase {
  @Metadata()
  request: TagsPutRequests;
}


export class TagsPutResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
