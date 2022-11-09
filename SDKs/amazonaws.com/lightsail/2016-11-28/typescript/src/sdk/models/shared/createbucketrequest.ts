import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CreateBucketRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName: string;

  @Metadata({ data: "json, name=bundleId" })
  bundleId: string;

  @Metadata({ data: "json, name=enableObjectVersioning" })
  enableObjectVersioning?: boolean;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
