import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateBucketRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName: string;

  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId: string;

  @SpeakeasyMetadata({ data: "json, name=enableObjectVersioning" })
  enableObjectVersioning?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
