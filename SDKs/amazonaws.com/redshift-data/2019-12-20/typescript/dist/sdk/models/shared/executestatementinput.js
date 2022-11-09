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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var ExecuteStatementInput = /** @class */ (function (_super) {
    __extends(ExecuteStatementInput, _super);
    function ExecuteStatementInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], ExecuteStatementInput.prototype, "clusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "json, name=Database" }),
        __metadata("design:type", String)
    ], ExecuteStatementInput.prototype, "database", void 0);
    __decorate([
        Metadata({ data: "json, name=DbUser" }),
        __metadata("design:type", String)
    ], ExecuteStatementInput.prototype, "dbUser", void 0);
    __decorate([
        Metadata({ data: "json, name=Parameters", elemType: shared.SqlParameter }),
        __metadata("design:type", Array)
    ], ExecuteStatementInput.prototype, "parameters", void 0);
    __decorate([
        Metadata({ data: "json, name=SecretArn" }),
        __metadata("design:type", String)
    ], ExecuteStatementInput.prototype, "secretArn", void 0);
    __decorate([
        Metadata({ data: "json, name=Sql" }),
        __metadata("design:type", String)
    ], ExecuteStatementInput.prototype, "sql", void 0);
    __decorate([
        Metadata({ data: "json, name=StatementName" }),
        __metadata("design:type", String)
    ], ExecuteStatementInput.prototype, "statementName", void 0);
    __decorate([
        Metadata({ data: "json, name=WithEvent" }),
        __metadata("design:type", Boolean)
    ], ExecuteStatementInput.prototype, "withEvent", void 0);
    return ExecuteStatementInput;
}(SpeakeasyBase));
export { ExecuteStatementInput };
