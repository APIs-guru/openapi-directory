import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DomainMetadataResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attributeNameCount?: number;

  @SpeakeasyMetadata()
  attributeNamesSizeBytes?: number;

  @SpeakeasyMetadata()
  attributeValueCount?: number;

  @SpeakeasyMetadata()
  attributeValuesSizeBytes?: number;

  @SpeakeasyMetadata()
  itemCount?: number;

  @SpeakeasyMetadata()
  itemNamesSizeBytes?: number;

  @SpeakeasyMetadata()
  timestamp?: number;
}
