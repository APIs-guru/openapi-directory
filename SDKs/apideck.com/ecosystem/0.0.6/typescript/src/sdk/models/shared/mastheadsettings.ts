import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MastheadSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=background" })
  background?: string;

  @Metadata({ data: "json, name=background_color" })
  backgroundColor?: string;

  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=columns" })
  columns?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
