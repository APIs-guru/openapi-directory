import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Timezone
/** 
 * A time zone associated with a <code>DBInstance</code> or a <code>DBSnapshot</code>. This data type is an element in the response to the <code>DescribeDBInstances</code>, the <code>DescribeDBSnapshots</code>, and the <code>DescribeDBEngineVersions</code> actions. 
**/
export class Timezone extends SpeakeasyBase {
  @SpeakeasyMetadata()
  timezoneName?: string;
}
