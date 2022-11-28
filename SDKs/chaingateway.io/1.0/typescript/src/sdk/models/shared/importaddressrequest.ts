import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Content } from "./content";



export class ImportAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content: Content;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;
}
