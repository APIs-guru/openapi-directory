import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociationSession extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=productCodes" })
  productCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=redirectUrl" })
  redirectUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=userLocale" })
  userLocale?: string;

  @SpeakeasyMetadata({ data: "json, name=websiteLocale" })
  websiteLocale?: string;

  @SpeakeasyMetadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;
}
