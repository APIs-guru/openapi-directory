import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Content } from "./content";


export class ImportAddressRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content: Content;

  @Metadata({ data: "json, name=filename" })
  filename: string;

  @Metadata({ data: "json, name=password" })
  password: string;
}
