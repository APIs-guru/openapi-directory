import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RenderingError } from "./renderingerror";


export class RenderUiTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Errors", elemType: shared.RenderingError })
  errors: RenderingError[];

  @Metadata({ data: "json, name=RenderedContent" })
  renderedContent: string;
}
