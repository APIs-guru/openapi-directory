import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { File } from "./file";
import { Translation } from "./translation";


export class Product extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=logo" })
  logo?: File;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=sequence" })
  sequence?: number;

  @Metadata({ data: "json, name=slug" })
  slug: string;

  @Metadata({ data: "json, name=translations", elemType: shared.Translation })
  translations?: Translation[];

  @Metadata({ data: "json, name=visible" })
  visible: boolean;
}
