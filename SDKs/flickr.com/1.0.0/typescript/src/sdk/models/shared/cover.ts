import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Cover extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=farm" })
  farm?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isfamily" })
  isfamily?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isfriend" })
  isfriend?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ispublic" })
  ispublic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=y" })
  y?: string;
}
