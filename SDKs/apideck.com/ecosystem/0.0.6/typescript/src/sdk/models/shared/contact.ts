import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Contact extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;

  @Metadata({ data: "json, name=linked_in" })
  linkedIn?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=role" })
  role?: string;

  @Metadata({ data: "json, name=twitter" })
  twitter?: string;
}
