import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MarkdownRenderRawRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  string?: string;

  @SpeakeasyMetadata({ data: "request, media_type=text/x-markdown" })
  string1?: string;
}


export class MarkdownRenderRawRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: MarkdownRenderRawRequests;
}


export class MarkdownRenderRawResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  markdownRenderRaw200TextHtmlString?: string;
}
