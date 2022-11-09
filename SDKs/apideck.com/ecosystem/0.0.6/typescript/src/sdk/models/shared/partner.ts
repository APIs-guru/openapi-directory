import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Contact } from "./contact";
import { File } from "./file";


export class Partner extends SpeakeasyBase {
  @Metadata({ data: "json, name=company" })
  company: string;

  @Metadata({ data: "json, name=contacts", elemType: shared.Contact })
  contacts?: Contact[];

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=icon" })
  icon?: File;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=listed" })
  listed?: string;

  @Metadata({ data: "json, name=twitter" })
  twitter?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=website" })
  website?: string;
}
