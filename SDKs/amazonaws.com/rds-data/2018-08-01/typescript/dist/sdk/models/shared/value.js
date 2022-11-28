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
import { StructValue } from "./structvalue";
// Value
/**
 * <p>Contains the value of a column.</p> <pre><code> &lt;important&gt; &lt;p&gt;This data type is deprecated.&lt;/p&gt; &lt;/important&gt; </code></pre>
**/
var Value = /** @class */ (function (_super) {
    __extends(Value, _super);
    function Value() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arrayValues", elemType: Value }),
        __metadata("design:type", Array)
    ], Value.prototype, "arrayValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigIntValue" }),
        __metadata("design:type", Number)
    ], Value.prototype, "bigIntValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bitValue" }),
        __metadata("design:type", Boolean)
    ], Value.prototype, "bitValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blobValue" }),
        __metadata("design:type", String)
    ], Value.prototype, "blobValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doubleValue" }),
        __metadata("design:type", Number)
    ], Value.prototype, "doubleValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intValue" }),
        __metadata("design:type", Number)
    ], Value.prototype, "intValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isNull" }),
        __metadata("design:type", Boolean)
    ], Value.prototype, "isNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=realValue" }),
        __metadata("design:type", Number)
    ], Value.prototype, "realValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stringValue" }),
        __metadata("design:type", String)
    ], Value.prototype, "stringValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=structValue" }),
        __metadata("design:type", StructValue)
    ], Value.prototype, "structValue", void 0);
    return Value;
}(SpeakeasyBase));
export { Value };
