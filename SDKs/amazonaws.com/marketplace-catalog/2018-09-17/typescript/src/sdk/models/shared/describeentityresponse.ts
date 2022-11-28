import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeEntityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=EntityArn" })
  entityArn?: string;

  @SpeakeasyMetadata({ data: "json, name=EntityIdentifier" })
  entityIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=EntityType" })
  entityType?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: string;
}
