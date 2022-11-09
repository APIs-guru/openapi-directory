import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InputCompany extends SpeakeasyBase {
  @Metadata({ data: "json, name=companyName" })
  companyName?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=employee" })
  employee?: string;

  @Metadata({ data: "json, name=industry" })
  industry?: string;

  @Metadata({ data: "json, name=linkedin" })
  linkedin?: string;

  @Metadata({ data: "json, name=twitter" })
  twitter?: string;

  @Metadata({ data: "json, name=website" })
  website?: string;
}
