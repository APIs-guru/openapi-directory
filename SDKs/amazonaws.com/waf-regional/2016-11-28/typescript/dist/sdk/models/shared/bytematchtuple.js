var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldToMatch } from "./fieldtomatch";
import { PositionalConstraintEnum } from "./positionalconstraintenum";
import { TextTransformationEnum } from "./texttransformationenum";
// ByteMatchTuple
/**
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.</p>
**/
var ByteMatchTuple = /** @class */ (function (_super) {
    __extends(ByteMatchTuple, _super);
    function ByteMatchTuple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FieldToMatch" }),
        __metadata("design:type", FieldToMatch)
    ], ByteMatchTuple.prototype, "fieldToMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PositionalConstraint" }),
        __metadata("design:type", String)
    ], ByteMatchTuple.prototype, "positionalConstraint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetString" }),
        __metadata("design:type", String)
    ], ByteMatchTuple.prototype, "targetString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TextTransformation" }),
        __metadata("design:type", String)
    ], ByteMatchTuple.prototype, "textTransformation", void 0);
    return ByteMatchTuple;
}(SpeakeasyBase));
export { ByteMatchTuple };
