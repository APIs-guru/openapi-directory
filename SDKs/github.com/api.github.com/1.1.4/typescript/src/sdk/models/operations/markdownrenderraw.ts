import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MarkdownRenderRawRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=text/plain" })
  string?: string;

  @Metadata({ data: "request, media_type=text/x-markdown" })
  string1?: string;
}


export class MarkdownRenderRawRequest extends SpeakeasyBase {
  @Metadata()
  request?: MarkdownRenderRawRequests;
}


export class MarkdownRenderRawResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  markdownRenderRaw200TextHtmlString?: string;
}
