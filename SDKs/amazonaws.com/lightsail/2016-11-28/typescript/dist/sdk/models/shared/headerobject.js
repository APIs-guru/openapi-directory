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
import { ForwardValuesEnum } from "./forwardvaluesenum";
// HeaderObject
/**
 * <p>Describes the request headers that a Lightsail distribution bases caching on.</p> <p>For the headers that you specify, your distribution caches separate versions of the specified content based on the header values in viewer requests. For example, suppose viewer requests for <code>logo.jpg</code> contain a custom <code>product</code> header that has a value of either <code>acme</code> or <code>apex</code>, and you configure your distribution to cache your content based on values in the <code>product</code> header. Your distribution forwards the <code>product</code> header to the origin and caches the response from the origin once for each header value. </p>
**/
var HeaderObject = /** @class */ (function (_super) {
    __extends(HeaderObject, _super);
    function HeaderObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headersAllowList" }),
        __metadata("design:type", Array)
    ], HeaderObject.prototype, "headersAllowList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=option" }),
        __metadata("design:type", String)
    ], HeaderObject.prototype, "option", void 0);
    return HeaderObject;
}(SpeakeasyBase));
export { HeaderObject };
