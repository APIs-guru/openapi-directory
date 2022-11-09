import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateGeofenceCollectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CollectionArn" })
  collectionArn: string;

  @Metadata({ data: "json, name=CollectionName" })
  collectionName: string;

  @Metadata({ data: "json, name=CreateTime" })
  createTime: Date;
}
