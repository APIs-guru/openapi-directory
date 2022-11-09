import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeEntityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Details" })
  details?: string;

  @Metadata({ data: "json, name=EntityArn" })
  entityArn?: string;

  @Metadata({ data: "json, name=EntityIdentifier" })
  entityIdentifier?: string;

  @Metadata({ data: "json, name=EntityType" })
  entityType?: string;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: string;
}
