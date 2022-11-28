import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";
import { File } from "./file";



export class Partner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=company" })
  company: string;

  @SpeakeasyMetadata({ data: "json, name=contacts", elemType: Contact })
  contacts?: Contact[];

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=icon" })
  icon?: File;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=listed" })
  listed?: string;

  @SpeakeasyMetadata({ data: "json, name=twitter" })
  twitter?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}
