import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociationSession extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=productCodes" })
  productCodes?: string[];

  @Metadata({ data: "json, name=redirectUrl" })
  redirectUrl?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=userLocale" })
  userLocale?: string;

  @Metadata({ data: "json, name=websiteLocale" })
  websiteLocale?: string;

  @Metadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;
}
