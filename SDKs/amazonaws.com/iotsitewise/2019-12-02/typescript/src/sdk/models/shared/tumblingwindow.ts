import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TumblingWindow
/** 
 * <p>Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time window. You use this window in metrics to aggregate data from properties and other assets.</p> <p>You can use <code>m</code>, <code>h</code>, <code>d</code>, and <code>w</code> when you specify an interval or offset. Note that <code>m</code> represents minutes, and <code>w</code> represents weeks. You can also use <code>s</code> to represent seconds in <code>offset</code>.</p> <p>The <code>interval</code> and <code>offset</code> parameters support the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601 format</a>. For example, <code>PT5S</code> represents five seconds, <code>PT5M</code> represents five minutes, and <code>PT5H</code> represents five hours.</p>
**/
export class TumblingWindow extends SpeakeasyBase {
  @Metadata({ data: "json, name=interval" })
  interval: string;

  @Metadata({ data: "json, name=offset" })
  offset?: string;
}
