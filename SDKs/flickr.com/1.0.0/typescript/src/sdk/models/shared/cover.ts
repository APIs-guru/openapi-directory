import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Cover extends SpeakeasyBase {
  @Metadata({ data: "json, name=farm" })
  farm?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isfamily" })
  isfamily?: boolean;

  @Metadata({ data: "json, name=isfriend" })
  isfriend?: boolean;

  @Metadata({ data: "json, name=ispublic" })
  ispublic?: boolean;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=server" })
  server?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=y" })
  y?: string;
}
