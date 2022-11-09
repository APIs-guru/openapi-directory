import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateGeofenceCollectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CollectionArn" })
  collectionArn: string;

  @Metadata({ data: "json, name=CollectionName" })
  collectionName: string;

  @Metadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
