import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MarkdownRenderRequestBodyModeEnum {
    Markdown = "markdown"
,    Gfm = "gfm"
}


export class MarkdownRenderRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=context" })
  context?: string;

  @Metadata({ data: "json, name=mode" })
  mode?: MarkdownRenderRequestBodyModeEnum;

  @Metadata({ data: "json, name=text" })
  text: string;
}


export class MarkdownRenderRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: MarkdownRenderRequestBody;
}


export class MarkdownRenderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  markdownRender200TextHtmlString?: string;
}
