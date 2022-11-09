import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { File } from "./file";
import { Translation } from "./translation";


export class Screenshot extends SpeakeasyBase {
  @Metadata({ data: "json, name=caption" })
  caption?: string;

  @Metadata({ data: "json, name=file" })
  file?: File;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=translations", elemType: shared.Translation })
  translations?: Translation[];
}
